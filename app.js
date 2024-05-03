import express from "express";
import { Telegraf } from "telegraf";

const app = express();
const PORT = 3000;
const TOKEN = "ваш токен";

const bot = new Telegraf(TOKEN);

const buhlo = [
  "Пивко",
  "Водочка",
  "Бурбон",
  "Портвейн",
  "Виски",
  "Мартини",
  "Коньяк",
  "Вино",
  "Шампанское",
  "Сидр",
  "Текила",
];

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятничка",
  "Субботка",
];

const d = new Date();
const n = d.getDay();
let name;

bot.start((ctx) => {
  ctx.reply(
    "Я алко бот!! Помогу тебе с выбором напитка по дням недели. Отправь мне свое имя"
  );
});

bot.on("text", (ctx) => {
  name = ctx.message.text;
  ctx.reply(`Привет, ${name}`);
  ctx.reply("Запускаю фортуну бухла....");
  setTimeout(() => {
    ctx.reply("Подготовка рюмок...");
    setTimeout(() => {
      let i = 0;
      let interval = setInterval(function () {
        ctx.reply(`${buhlo[i++]}`);
      }, 400);

      setTimeout(() => {
        clearInterval(interval);
      }, (buhlo.length + 1) * 400);
    }, 2000);
  }, 1000);

  setTimeout(() => {
    ctx.reply("Кручу пивной барабан...");
    ctx.reply("Проверяю день недели...");
  }, (buhlo.length + 1) * 650);

  setTimeout(() => {
    const buhloFortuna = buhlo[Math.floor(Math.random() * buhlo.length)];
    switch (buhloFortuna) {
      case "Пивко":
        ctx.reply(
          `Сегодня ${days[n]} \nВаш лот - ${buhloFortuna} \n${name}, этот напиток так же прекрасен как и ваше имя❤️. \nПригласи друзей на ПИВО проведешь ты день КРАСИВОО`
        );
        break;
      case "Водочка":
        ctx.reply(
          `Сегодня ${days[n]} \nВаш лот - ${buhloFortuna} \n${name}, этот напиток так же прекрасен как и ваше имя❤️. \nБутылка на стол — и дела под стол`
        );
        break;
      case "Бурбон":
        ctx.reply(
          `Сегодня ${days[n]} \nВаш лот - ${buhloFortuna} \n${name}, этот напиток так же прекрасен как и ваше имя❤️. \nХороша бражка, но мала чашка`
        );
        break;
      case "Портвейн":
        ctx.reply(
          `Сегодня ${days[n]} \nВаш лот - ${buhloFortuna} \n${name}, этот напиток так же прекрасен как и ваше имя❤️. \nБыстро выпитый стакан не считается налитым.`
        );
        break;
      case "Виски":
        ctx.reply(
          `Сегодня ${days[n]} \nВаш лот - ${buhloFortuna} \n${name}, этот напиток так же прекрасен как и ваше имя❤️. \nВиски — это сжиженный солнечный свет.`
        );
        break;
      case "Мартини":
        ctx.reply(
          `Сегодня ${days[n]} \nВаш лот - ${buhloFortuna} \n${name}, этот напиток так же прекрасен как и ваше имя❤️. \nВзболтать и не смешивать!!`
        );
        break;
      case "Коньяк":
        ctx.reply(
          `Сегодня ${days[n]} \nВаш лот - ${buhloFortuna} \n${name}, этот напиток так же прекрасен как и ваше имя❤️. \nКоньяк — ликер богов!`
        );
        break;
      case "Вино":
        ctx.reply(
          `Сегодня ${days[n]} \nВаш лот - ${buhloFortuna} \n${name}, этот напиток так же прекрасен как и ваше имя❤️. \nИстина в вине!`
        );
        break;
      case "Шампанское":
        ctx.reply(
          `Сегодня ${days[n]} \nВаш лот - ${buhloFortuna} \n${name}, этот напиток так же прекрасен как и ваше имя❤️. \nС рыбой пьют белое вино, с цыганами шампанское.`
        );
        break;
      case "Сидр":
        ctx.reply(
          `Сегодня ${days[n]} \nВаш лот - ${buhloFortuna} \n${name}, этот напиток так же прекрасен как и ваше имя❤️. \nЕсли из-за яблока человек лишился рая, то благодаря сидру он обрёл его вновь.`
        );
        break;
      case "Текила":
        ctx.reply(
          `Сегодня ${days[n]} \nВаш лот - ${buhloFortuna} \n${name}, этот напиток так же прекрасен как и ваше имя❤️. \nЕсли жизнь дает тебе лимоны — попроси текилы и соли!`
        );
        break;
      default:
        ctx.reply("лол");
        break;
    }
  }, 10000);
});

bot.launch();
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`));
