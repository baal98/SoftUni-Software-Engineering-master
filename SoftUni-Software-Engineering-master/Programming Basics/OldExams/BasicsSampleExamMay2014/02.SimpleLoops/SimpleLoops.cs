﻿using System;
using System.Numerics;

public class SimpleLoops
{
    public static void Main()
    {
        BigInteger t1 = BigInteger.Parse(Console.ReadLine());
        BigInteger t2 = BigInteger.Parse(Console.ReadLine());
        BigInteger t3 = BigInteger.Parse(Console.ReadLine());
        int n = int.Parse(Console.ReadLine());

        for (int i = 3; i < n; i++)
        {
            BigInteger sum = t1 + t2 + t3;
            t1 = t2;
            t2 = t3;
            t3 = sum;
        }

        if (n >= 3)
        {
            Console.WriteLine(t3);
        }
        else if (n == 2)
        {
            Console.WriteLine(t2);
        }
        else
        {
            Console.WriteLine(t1);
        }
    }
}
