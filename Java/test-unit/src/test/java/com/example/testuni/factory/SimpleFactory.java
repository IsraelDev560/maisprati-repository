package com.example.testuni.factory;

import java.util.Random;

public class SimpleFactory {
    public SimpleFactory(){

    }

    public static Long getRandomLong(){return (new Random()).nextLong();}
}
