﻿using System;

public class Distance
{
    public static void Main()
    {
        int speed = int.Parse(Console.ReadLine());
        int firstPeriod = int.Parse(Console.ReadLine());
        int secondPeriod = int.Parse(Console.ReadLine());
        int thirdPeriod = int.Parse(Console.ReadLine());

        double startSpeed = speed * (firstPeriod / 60.0);
        double speedUp = (speed + (speed * 0.1)) * (secondPeriod / 60.0);
        double speedDown = ((speed + (speed * 0.1)) - ((speed + (speed * 0.1)) * 0.05)) * (thirdPeriod / 60.0);

        double result = startSpeed + speedDown + speedUp;

        Console.WriteLine($"{result:f2}");
    }
}