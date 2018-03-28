\c postgres;
DROP DATABASE articledb;
CREATE DATABASE articledb;
\c articledb;
DROP TABLE comment;
DROP TABLE article;
DROP TABLE author;
CREATE TABLE author (
  author_id serial primary key,
  name text
);
CREATE TABLE article (
  id serial primary key,
  title text,
  body text,
  author_id integer
);
CREATE TABLE comment (
  id serial primary key,
  name text,
  body text,
  article_id integer
);
INSERT INTO article (title, body, author_id) VALUES('You will not believe...', 'Biloxi, MS- Local man Ernest Weaver...', 1);
INSERT INTO article (title, body, author_id) VALUES('We dare you to read...', 'A story that will melt your heart with kittens...', 2);
INSERT INTO article (title, body, author_id) VALUES('This is not clickbait', 'Local squirrel wrangler finds himself in a serious situation...', 3);
INSERT INTO comment (name, body, article_id) VALUES('Sally', 'This was very believable.', 1);
INSERT INTO comment (name, body, article_id) VALUES('Abraham', 'I love Biloxi.', 1);
INSERT INTO comment (name, body, article_id) VALUES('Miranda', 'I came for the kittens. I stayed for the prose.', 2);
INSERT INTO comment (name, body, article_id) VALUES('Ezekiel', 'Meh, I like turtles.', 2);
INSERT INTO comment (name, body, article_id) VALUES('Lisa', 'Not impressed. Do it again.', 7);
INSERT INTO author (name) VALUES('E Hemingway');
INSERT INTO author (name) VALUES('W Burroughs');

select article.id as article_id,article.title as article_title,
  comment.id as comment_id,comment.name as comment_name,comment.body as comment_body from article
  left outer join comment on article.id = comment.article_id;

select author.author_id as author_id, author.name as author_name, article.title as article_title,
  article.body as article_body, comment.name as comment_name, comment.body as comment_body from author
  inner join article on author.author_id = article.author_id
  inner join comment on article.id = comment.article_id;
