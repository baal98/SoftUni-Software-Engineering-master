﻿using System;

public class Fishland
{
    public static void Main()
    {
        decimal marcelPricePerKg = decimal.Parse(Console.ReadLine());
        decimal spratPricePerKg = decimal.Parse(Console.ReadLine());
        decimal beltedBonitoKg = decimal.Parse(Console.ReadLine());
        decimal scadKg = decimal.Parse(Console.ReadLine());
        decimal clamsKg = decimal.Parse(Console.ReadLine());

        decimal beltedBonitoPricePerKg = marcelPricePerKg + (marcelPricePerKg * 0.6m);
        decimal beltedBonitoIncome = beltedBonitoPricePerKg * beltedBonitoKg;

        decimal scadPricePerKg = spratPricePerKg + (spratPricePerKg * 0.8m);
        decimal scadIncome = scadPricePerKg * scadKg;

        decimal totalIncome = scadIncome + beltedBonitoIncome + (clamsKg * 7.50m);

        Console.WriteLine("{0:f2}", totalIncome);
    }
}
