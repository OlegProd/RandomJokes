// let url = 'https://type.fit/api/quotes';
// async function getData() {
//     const res = await fetch(url);
//     const data = await res.json();
//    quoteGeneration(data);
//   }

// getData();

const arrBart = [
 [ 
   "Ай, карамба!",
  "Съешь мои шорты!",
  "Не кипятись, мужик!",
  "Я этого не делал! Я случайно",
  "Я сейчас всё объясню!",
  "Я — Барт Симпсон. А ты, чёрт возьми, кто?",
  "Это Бартмен!",
  "Аааааминь!",
  "Моё домашнее задание съела собака!",
  "Тыканье палкой в мертвого енота — не наука!",
  "Мама, ты классный мужик!",
  "Привет, мир, поцелуй меня в зад!",
  "Я не буду пугать людей, страдающих недержанием...",
  "Пиво в пакете из-под молока не становится молоком.",
 ],
 [
  "Ay, caramba!",
  "Eat my shorts!",
  "Don't boil, man!",
  "I didn't do it! I accidentally",
  "I'll explain everything now!",
  "I'm Bart Simpson. Who the hell are you?",
  "It's Bartman!",
  "Aaaaamen!",
  "My homework was eaten by a dog!",
  "Poking a dead raccoon with a stick is not science!",
  "Mom, you're a cool man!",
  "Hello world, kiss my ass!",
  "I won't scare incontinent people...",
  "Beer in a milk carton does not become milk.",
 ]
];

const arrHomer = [
  [
  "Попытка - первый шаг к провалу",
  "Будь щедрее в постели. Поделись бутербродом.",
  "Алкоголь-причина и решение всех проблем",
  "Не волнуйся, голова! Теперь будет думать компьютер.",
  "Для вранья нужны двое. Один врёт, другой слушает.",
  "Дети – наше будущее. Вот почему их надо остановить сейчас.",
  "Дети – те же обезьяны. Только шума от них больше.",
  "Я умру одиноким, старым и мертвым.",
  "Не бывает невкусных пончиков.",
  ],
  [
  "Trying is the first step to failure",
  "Be generous in bed. Share a sandwich.",
  "Life is just a bunch of stuff that happens",
  "Alcohol is the cause and solution of all problems",
  "Don't worry, head! Now the computer will think.",
  "It takes two to lie. One lies, the other listens.",
  "I will die alone, old and dead.",
  "There are no tasteless donuts.",
  ]
];

const homer = document.querySelector(".block-image-homer");
const bart = document.querySelector(".block-image-bart");
const bartText = document.querySelector(".comment_text");
const homerText = document.querySelector(".comment_homer");
const cloudBart = document.querySelector(".block-cloud_bart");
const cloudHomer = document.querySelector(".cloud_homer");
const buttonAll = document.querySelector(".button");
const buttonEN = document.querySelector(".buttonEN");
const buttonRU = document.querySelector(".buttonRU");
let isCheck = true;
let isShowEn = true;
let isShowRu = true;

const hiddenHomer = () => {
  bart.classList.add("shake");
  homer.classList.remove("shake");
  homerText.textContent = "...";
}

const hiddenBart = () => {
  homer.classList.add("shake");
  bart.classList.remove("shake");
  bartText.textContent = "...";
}

buttonEN.addEventListener('click', () => {
  isCheck = false;
  if(isShowEn){
    randomFunc();
  }
})

buttonRU.addEventListener('click', () => {
  isCheck = true;
  if(isShowRu){
    randomFunc();
  }
})

const testFunc = () => {
  let homerArray = arrHomer[0][Math.floor(Math.random() * arrHomer[0].length)]
 let burtArray = arrBart[0][Math.floor(Math.random() * arrBart[0].length)];
  if(isCheck){

  if (bartText.textContent === "" && homerText.textContent === "...") {
    bartText.textContent = burtArray; 
    bart.classList.add("shake");
  } else if (bartText.textContent === "..." && homerText.textContent !== "") {
    bartText.textContent = burtArray;
   hiddenHomer();
  } else if (homerText.textContent === "..." && bartText.textContent !== "") {
    homerText.textContent = homerArray;
    hiddenBart();
    isShowEn = true;
   isShowRu = false;
  }
}else{
  let homerArrayE = arrHomer[1][Math.floor(Math.random() * arrHomer[1].length)]
  let burtArrayE = arrBart[1][Math.floor(Math.random() * arrBart[1].length)];
   if (bartText.textContent === "" && homerText.textContent === "...") {
     bartText.textContent = burtArrayE; 
     bart.classList.add("shake");
   } else if (bartText.textContent === "..." && homerText.textContent !== "") {
     bartText.textContent = burtArrayE;
    hiddenHomer();
   } else if (homerText.textContent === "..." && bartText.textContent !== "") {
     homerText.textContent = homerArrayE;
     hiddenBart();
   }else if (homerText.textContent === "..." && bartText.textContent === burtArray){
    bartText.textContent = burtArrayE;
   }
   isShowEn = false;
   isShowRu = true;
}

}



const randomFunc = () => {
  testFunc();
  
};
randomFunc();
buttonAll.addEventListener("click", randomFunc);


