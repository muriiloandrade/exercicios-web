const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/2 * 22 * * 1', function(){
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando a tarefa 1!')
}, 5000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 22
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})