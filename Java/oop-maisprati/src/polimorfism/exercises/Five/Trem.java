package polimorfism.exercises.Five;

public class Trem implements MeioTransporte{

    private String modelo;

    public Trem(String modelo){
        this.modelo = modelo;
    }

    @Override
    public void acelerar(){
        System.out.println(modelo+" Está acelerando...");
    }
    @Override
    public void frear(){
        System.out.println(modelo+" Está freando...");
    }
}
