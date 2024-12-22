package polimorfism.exercises.Five;

public class Carro implements MeioTransporte{
    private String modelo;

    public Carro(String modelo){
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
