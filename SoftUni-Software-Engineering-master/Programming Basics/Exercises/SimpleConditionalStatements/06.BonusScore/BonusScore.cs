﻿using System;

public class BonusScore
{
    public static void Main()
    {
        int score = int.Parse(Console.ReadLine());

        double bonusScore = 0d;

        if (score <= 100)
        {
            bonusScore += 5;
        }
        else if (score > 1000)
        {
            bonusScore = score * 0.1;
        }
        else
        {
            bonusScore = score * 0.2;
        }

        if (score % 2 == 0)
        {
            bonusScore += 1;
        }
        else if (score % 10 == 5)
        {
            bonusScore += 2;
        }

        Console.WriteLine(bonusScore);
        Console.WriteLine(bonusScore + score);
    }
}