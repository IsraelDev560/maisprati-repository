package polimorfism.exercises.Five;

public class Bicicleta implements MeioTransporte {
    private String modelo;

    public Bicicleta(String modelo){
        this.modelo = modelo;
    }

    @Override
    public void acelerar(){
        System.out.println(modelo + " Está acelerando...");
    }

    @Override
    public void frear(){
        System.out.println(modelo + " Está freando...");
    }
}
