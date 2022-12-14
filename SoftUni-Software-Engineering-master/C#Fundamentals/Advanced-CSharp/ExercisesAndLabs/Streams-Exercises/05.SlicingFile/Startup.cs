using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace _05.SlicingFile
{
    public class Startup
    {
        public static void Main()
        {
            ChooseAction();
        }

        private static void ChooseAction()
        {
            Console.Write(
                $"1 - for Assemble files{Environment.NewLine}2 - for Slice a file{Environment.NewLine}Enter the digit of your choice: ");

            var choosenAction = 0;

            try
            {
                choosenAction = int.Parse(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("Wrong input. Please try again.");
                ChooseAction();
            }

            switch (choosenAction)
            {
                case 1: // Assemble
                    var files = GetFilesToAssemble();

                    if (files.Count == 0)
                    {
                        return;
                    }

                    var destinationDirectory = files[0].Substring(0, files[0].LastIndexOf('\\'));
                    Assemble(files, destinationDirectory);
                    break;
                case 2: // Slice
                    var sourceFile = Console.ReadLine();
                    var dir = sourceFile.Substring(0, sourceFile.LastIndexOf('\\'));
                    destinationDirectory = Path.Combine(dir, $"Sliced - {DateTime.Now:dd-MM-yyyy - hh-mm}");
                    Directory.CreateDirectory(destinationDirectory);

                    var parts = 0;
                    Console.Write("Enter number of parts: ");

                    while (true)
                    {
                        try
                        {
                            parts = int.Parse(Console.ReadLine());
                            break;
                        }
                        catch (FormatException)
                        {
                            Console.WriteLine("Wrong input. Please try again.");
                        }
                    }

                    Slice(sourceFile, destinationDirectory, parts);
                    break;
                default:
                    Console.WriteLine("Wrong input. Please try again.");
                    ChooseAction();
                    break;
            }
        }

        private static void Slice(string sourceFile, string destinationDirectory, int parts)
        {
            var extension = Path.GetExtension(sourceFile);

            using (var reader = new FileStream(sourceFile, FileMode.Open))
            {
                var partSize = reader.Length / parts + 1;

                for (int i = 1; i <= parts; i++)
                {
                    var outputFile = Path.Combine(destinationDirectory, $"Part {i}{extension}");

                    using (var writer = new FileStream(outputFile, FileMode.Create))
                    {
                        var buffer = new byte[4096];

                        while (writer.Length < partSize)
                        {
                            var readBytes = reader.Read(buffer, 0, buffer.Length);

                            if (readBytes == 0)
                            {
                                break;
                            }

                            writer.Write(buffer, 0, readBytes);
                        }
                    }
                }
            }
        }

        private static void Assemble(List<string> files, string destinationDirectory)
        {
            var extension = Path.GetExtension(files[0]);
            var outputFile = Path.Combine(destinationDirectory,
                $"Assembled {DateTime.Now:dd-MM-yyyy - hh-mm}{extension}");

            try
            {
                using (var writer = new FileStream(outputFile, FileMode.CreateNew))
                {
                    foreach (var file in files)
                    {
                        try
                        {
                            using (var reader = new FileStream(file, FileMode.Open))
                            {
                                var buffer = new byte[4096];
                                var readBytesCount = reader.Read(buffer, 0, buffer.Length);

                                while (readBytesCount != 0)
                                {
                                    writer.Write(buffer, 0, readBytesCount);
                                    readBytesCount = reader.Read(buffer, 0, buffer.Length);
                                }
                            }
                        }
                        catch (FileNotFoundException)
                        {
                           Console.WriteLine(
                                $"File {file} cannot be found.{Environment.NewLine}The Assemble will be completed without this file.");
                        }
                    }
                }
            }
            catch (IOException)
            {
                destinationDirectory = Path.Combine(destinationDirectory, "Assemble");
                Assemble(files, destinationDirectory);
            }
        }

        private static List<string> GetFilesToAssemble()
        {
            Console.WriteLine($"{Environment.NewLine}1 - for adding file by file");
            Console.WriteLine("2 - for entering the folder to assemble the files in it");
            Console.Write("Choose action (1 or 2): ");
            var choosenOption = 0;

            try
            {
                choosenOption = int.Parse(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("This option does not exists!");
                GetFilesToAssemble();
            }

            switch (choosenOption)
            {
                case 1: // Gather File by File
                    return GatherFilesOneByOne();
                case 2: // Get files from Directory
                    return GetFilesFromDirectory();
                default:
                    return null;
            }
        }

        private static List<string> GetFilesFromDirectory()
        {
            var dir = GetDirectory();
            return Directory.GetFiles(dir).ToList();
        }

        private static List<string> GatherFilesOneByOne()
        {
            Console.WriteLine($"Enter your files. Each on a new line.");

            var files = new List<string>();

            string input = "Just to enter in the loop";
            while (!string.IsNullOrEmpty(input = Console.ReadLine()))
            {
                if (File.Exists(input))
                {
                    files.Add(input);
                }
                else
                {
                    Console.WriteLine("This file does not exists. Please try again.");
                }
            }

            return files;
        }

        public static string GetDirectory()
        {
            Console.Write("Enter Directory path: ");
            var dir = Console.ReadLine();

            while (!Directory.Exists(dir))
            {
                Console.WriteLine($@"This Directory does not exists. Please try again. You must enter the full path to your folder{Environment.NewLine}e.g. ""D:\Software-University-SoftUni\C# Advanced""");
                dir = Console.ReadLine();
            }

            return dir;
        }
    }
}
