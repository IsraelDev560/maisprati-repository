package org.example;

import lombok.Data;
@Data
public class Tarefa {
    private String titulo;
    private boolean concluida;

    public Tarefa(String titulo) {
        this.titulo = titulo;
        this.concluida = false;
    }

    public boolean getConcluida() {
        return this.concluida;
    }

    public void marcarComoConcluida() {
        if (this.concluida == false) {
            this.concluida = true;
            return;
        }
        System.out.println("A " + this.titulo + " ja está concluida!");
        return;
    }

    public void desmarcarComoConcluida() {
        if (this.concluida == true) {
            this.concluida = false;
            return;
        }
        System.out.println("A " + this.titulo + " ja não está concluida!");
        return;
    }
}
