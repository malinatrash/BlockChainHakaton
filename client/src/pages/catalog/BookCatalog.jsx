import React from 'react';
import './catalog.css'
import {Button} from "antd";
import BookItem from "./BookItem";

const BookCatalog = () => {

  const totalBooks = [
    {
      id: 1,
      title: 'Грокаем алгоритмы',
      description: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих от Бхаргава А. Эта книга рекомендована Яндекс Практикум при подготовке к алгоритмическому собеседованию.',
      price: 25,
      image: 'https://cv8.litres.ru/pub/c/cover_max1500/39158380.jpg'
    },
    {
      id: 2,
      title: 'Конец света может быть другим',
      description: 'Крах современной цивилизации неизбежен, считают авторы и называют признаки грядущего коллапса. Но уцелеет ли человечество или исчезнет с лица Земли как биологический вид?',
      price: 13,
      image: 'https://img4.labirint.ru/rc/5d4ba7f338b8ee35f7a93e3ac147f56d/363x561q80/books88/875214/cover.png?1681478706'
    },
    {
      id: 3,
      title: 'Как все может закончиться?',
      description: 'Таяние ледников, вымирание видов, развал экономики, голод, болезни, войны... Кажется, что из всей картины дня СМИ выбирают в основном дурные новости. Или все же такова суровая реальность?',
      price: 51,
      image: 'https://img3.labirint.ru/rc/6d9a86f04dbf56e5278f3c51610d2577/363x561q80/books88/875213/cover.png?1681478705'
    },
    {
      id: 1,
      title: 'Грокаем алгоритмы',
      description: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих от Бхаргава А. Эта книга рекомендована Яндекс Практикум при подготовке к алгоритмическому собеседованию.',
      price: 25,
      image: 'https://cv8.litres.ru/pub/c/cover_max1500/39158380.jpg'
    },
    {
      id: 2,
      title: 'Конец света может быть другим',
      description: 'Крах современной цивилизации неизбежен, считают авторы и называют признаки грядущего коллапса. Но уцелеет ли человечество или исчезнет с лица Земли как биологический вид?',
      price: 13,
      image: 'https://img4.labirint.ru/rc/5d4ba7f338b8ee35f7a93e3ac147f56d/363x561q80/books88/875214/cover.png?1681478706'
    },
    {
      id: 3,
      title: 'Как все может закончиться?',
      description: 'Таяние ледников, вымирание видов, развал экономики, голод, болезни, войны... Кажется, что из всей картины дня СМИ выбирают в основном дурные новости. Или все же такова суровая реальность?',
      price: 51,
      image: 'https://img3.labirint.ru/rc/6d9a86f04dbf56e5278f3c51610d2577/363x561q80/books88/875213/cover.png?1681478705'
    },
    {
      id: 1,
      title: 'Грокаем алгоритмы',
      description: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих от Бхаргава А. Эта книга рекомендована Яндекс Практикум при подготовке к алгоритмическому собеседованию.',
      price: 25,
      image: 'https://cv8.litres.ru/pub/c/cover_max1500/39158380.jpg'
    },
    {
      id: 2,
      title: 'Конец света может быть другим',
      description: 'Крах современной цивилизации неизбежен, считают авторы и называют признаки грядущего коллапса. Но уцелеет ли человечество или исчезнет с лица Земли как биологический вид?',
      price: 13,
      image: 'https://img4.labirint.ru/rc/5d4ba7f338b8ee35f7a93e3ac147f56d/363x561q80/books88/875214/cover.png?1681478706'
    },
    {
      id: 3,
      title: 'Как все может закончиться?',
      description: 'Таяние ледников, вымирание видов, развал экономики, голод, болезни, войны... Кажется, что из всей картины дня СМИ выбирают в основном дурные новости. Или все же такова суровая реальность?',
      price: 51,
      image: 'https://img3.labirint.ru/rc/6d9a86f04dbf56e5278f3c51610d2577/363x561q80/books88/875213/cover.png?1681478705'
    },
    {
      id: 2,
      title: 'Конец света может быть другим',
      description: 'Крах современной цивилизации неизбежен, считают авторы и называют признаки грядущего коллапса. Но уцелеет ли человечество или исчезнет с лица Земли как биологический вид?',
      price: 13,
      image: 'https://img4.labirint.ru/rc/5d4ba7f338b8ee35f7a93e3ac147f56d/363x561q80/books88/875214/cover.png?1681478706'
    }
  ]

  return (
    <div className={'book-catalog'}>
      {
        totalBooks.map(e => <BookItem e={e}/>)
      }
    </div>
  );
};

export default BookCatalog;
