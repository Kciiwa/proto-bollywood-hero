// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// const functions = require("firebase-functions");
// const admin = require("firebase-admin");

// admin.initializeApp();
// const db = admin.database();

// exports.generateSong = functions.https.onCall(async (data, context) => {
//   const {
//     recipient,
//     familyMember,
//     name,
//     zodiacSign,
//     gender,
//     height,
//     weight,
//     cityOfBirth,
//     description,
//     dateTimeOfBirth,
//   } = data.data;

//   // Валидация
//   if (
//     !recipient ||
//     !name ||
//     !zodiacSign ||
//     !gender ||
//     !height ||
//     !weight ||
//     !cityOfBirth ||
//     !description ||
//     !dateTimeOfBirth
//   ) {
//     throw new functions.https.HttpsError(
//       "invalid-argument",
//       "Missing fields in input data."
//     );
//   }

//   // 1. Генерация промпта
//   const prompt = `
// Напиши текст песни, посвящённой ${recipient} (${familyMember}), по имени ${name}.
// Она родилась в городе ${cityOfBirth}, ${dateTimeOfBirth}. По знаку зодиака она — ${zodiacSign}.
// Это ${gender}, ростом ${height} см и весом ${weight} кг.

// Вот её описание от первого лица: "${description}".

// Сделай текст тёплым, искренним, с нотками восхищения и любви.
// Добавь художественные образы, ассоциации со знаком зодиака, внешностью и чертами характера.
// Не пиши слишком пафосно — важна естественность и душевность.

// Структура песни: 2 куплета, 2 припева, при желании — бридж.
// Форматируй так, как будто это настоящий текст песни, которую можно положить на музыку.
// `;

//   // 2. Эмуляция ChatGPT (реальная интеграция будет тут)
//   const mockedLyrics = `Текст песни для ${name}`;

//   // 3. Эмуляция отправки в Suno и получения аудио
//   const mockedAudioUrl = "https://mocked-suno.com/audio/generated-song.mp3";

//   // 4. Возврат данных
//   const result = {
//     songTitle: `Песня для ${name}`,
//     lyrics: mockedLyrics,
//     audioUrl: mockedAudioUrl,
//   };

//   // Вывод в консоль
//   console.log("🎤 Сгенерированный текст песни:\n", mockedLyrics);
//   console.log("🔗 Ссылка на песню:", mockedAudioUrl);

//   return result;
// });

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.database();

exports.generateSong = functions.https.onCall(async (data, context) => {
  const {
    recipient,
    familyMember,
    name,
    zodiacSign,
    gender,
    height,
    weight,
    cityOfBirth,
    description,
    dateTimeOfBirth,
  } = data.data;

  //   console.log("👤 UID:", context.auth.uid);
  // 🔒 Проверка аутентификации
  //   if (!context.auth) {
  //     throw new functions.https.HttpsError(
  //       "unauthenticated",
  //       "User must be authenticated to generate songs."
  //     );
  //   }

  const uid = context.auth;
  console.log("👤 UID:", uid);

  // 🧪 Валидация
  if (
    !recipient ||
    !name ||
    !zodiacSign ||
    !gender ||
    !height ||
    !weight ||
    !cityOfBirth ||
    !description ||
    !dateTimeOfBirth
  ) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Missing fields in input data."
    );
  }

  // ✏️ Промпт для генерации текста
  const prompt = `
Напиши текст песни, посвящённой ${recipient} (${familyMember}), по имени ${name}.
Она родилась в городе ${cityOfBirth}, ${dateTimeOfBirth}. По знаку зодиака она — ${zodiacSign}.
Это ${gender}, ростом ${height} см и весом ${weight} кг.

Вот её описание от первого лица: "${description}".

Сделай текст тёплым, искренним, с нотками восхищения и любви.
Добавь художественные образы, ассоциации со знаком зодиака, внешностью и чертами характера.
Не пиши слишком пафосно — важна естественность и душевность.

Структура песни: 2 куплета, 2 припева, при желании — бридж.
Форматируй так, как будто это настоящий текст песни, которую можно положить на музыку.
`;

  // 🎭 Эмуляция ChatGPT-ответа
  const mockedLyrics = `Текст песни для ${name}`;

  // 🎧 Эмуляция генерации через Suno
  const mockedAudioUrl = "https://mocked-suno.com/audio/generated-song.mp3";

  // 🎼 Название песни
  const songTitle = `Песня для ${name}`;

  // 🗃 Сохранение в базу
  const songRef = db.ref(`users/${uid}/songs`).push();
  const createdAt = Date.now();

  await songRef.set({
    songId: songRef.key,
    songTitle,
    lyrics: mockedLyrics,
    audioUrl: mockedAudioUrl,
    createdAt,
    recipient,
    familyMember,
    name,
    zodiacSign,
    gender,
    height,
    weight,
    cityOfBirth,
    description,
    dateTimeOfBirth,
  });

  // 🔁 Возврат результата
  return {
    songId: songRef.key,
    songTitle,
    lyrics: mockedLyrics,
    audioUrl: mockedAudioUrl,
    createdAt,
  };
});
