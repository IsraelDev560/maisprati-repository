package polimorfism;

/*
  A classe MeioTransporte no pacote Five, representa uma classe de meios de transportes, tendo metodos como acelerar e frear.

  A classe Animal no pacote Six, representa uma classe de animais, que emitem um som.

  Foi feito um loop para iterar sobre as classes de cada metodo.
*/

import polimorfism.exercises.Five.Bicicleta;
import polimorfism.exercises.Five.Carro;
import polimorfism.exercises.Five.MeioTransporte;
import polimorfism.exercises.Five.Trem;
import polimorfism.exercises.Six.Animal;
import polimorfism.exercises.Six.Cachorro;
import polimorfism.exercises.Six.Gato;
import polimorfism.exercises.Six.Vaca;

import java.util.ArrayList;
import java.util.List;

public class Polimorfism {
    public static void main(String[] args) {
        List<MeioTransporte> list = new ArrayList<>();
        list.add(new Carro("Camaro"));
        list.add(new Bicicleta("BMX"));
        list.add(new Trem("ES43"));
        for (MeioTransporte listT : list){
           listT.acelerar();
           listT.frear();
        }
        System.out.println("-------------");
        List<Animal> animals = new ArrayList<>();
        animals.add(new Cachorro());
        animals.add(new Gato());
        animals.add(new Vaca());
        for(Animal animal : animals) {
            animal.emitirSom();
        }
    }
}
