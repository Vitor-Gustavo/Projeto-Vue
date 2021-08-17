<template>
  <div id="app" class="container">
        <h2>{{ titulo }}</h2>
        <div class="input-group">
            <input @keyup.enter="adicionarTarefa" class="form-control" type="text" v-model="novaTarefa">
            <span class="input-group-btn">
                <button @click="adicionarTarefa" class="btn btn-primary">Adicionar</button>
            </span>
        </div>
        <ul>
            <li v-for="(tarefa, index) in tarefas" :key="index" :class="{'removed': tarefa.checked}"> 
                <input v-model="tarefa.checked" type="checkbox"> 
                <label>{{ tarefa.titulo }}</label>
            </li>
        </ul>
        <p> <em>Total de Tarefas: </em> <span>{{ totalTarefas }}</span> </p>
        <p> <em>Tarefas concluídas: </em> <span>{{ totalTarefasConcluidas }}</span> </p>

        <footer>
            <hr>
            <em>Altere o título da sua lista de tarefas</em>
            <input type="text" v-model="titulo">
        </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
        return {
            titulo: "Minhas tarefas",
            tarefas: [
                {titulo: "Estudar", checked: true},
                {titulo: "Ler", checked: false},
                {titulo: "Escrever", checked: false},

            ],
            novaTarefa:''
        }
    },
    methods: {
        adicionarTarefa() {
            this.tarefas.push({
                titulo: this.novaTarefa, checked: false
            })
            this.novaTarefa = ''
        }
    },
    computed: {
        totalTarefas() {
            return this.tarefas.length
        },
        totalTarefasConcluidas() {
            const concluidas = this.tarefas.filter(tarefa => tarefa.checked)
            return concluidas.length
        }
    }
}
</script>

<style>
.container {

    width: 40%;
    margin-top: 20px auto 0px auto;
}

.removed {
    color:gray;
}

.removed label {
    text-decoration: line-through;
}

ul li {
    list-style-type: none;
}
</style>
