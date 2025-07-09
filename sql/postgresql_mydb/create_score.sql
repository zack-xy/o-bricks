-- Active: 1751352786947@@127.0.0.1@5432@mydb
CREATE TABLE score (
  student_name VARCHAR(40),
  chinese_score INT,
  math_score INT,
  test_date DATE
);


CREATE TABLE student (
  no INTEGER PRIMARY KEY,
  student_name VARCHAR(40),
  age INTEGER,
  has_money DECIMAL(2, 0)
);


DROP TABLE student;

INSERT INTO student VALUES(1, '张三', 14, 1);

INSERT INTO student (no, age, student_name, class_no) VALUES (2, 13, '李四', 1);

INSERT INTO student (no, student_name, age, class_no) VALUES (3, '王二', 15, 1);

INSERT INTO student (no, student_name, age) VALUES (4, '赵子龙', 20);

UPDATE student SET age = 13, student_name='王明充' WHERE no = 3;

DELETE FROM student WHERE no = 4;

SELECT no, student_name, age+5 AS agePlus5 FROM student;


CREATE TABLE class(
  no INTEGER PRIMARY KEY,
  class_name VARCHAR(40)
)


ALTER TABLE student ADD class_no INTEGER;


SELECT * FROM student;

INSERT INTO class VALUES(1, '初二(1)班');
INSERT INTO class VALUES(2, '初二(2)班');
INSERT INTO class VALUES(3, '初二(3)班');
INSERT INTO class VALUES(4, '初二(4)班');

UPDATE student SET class_no = 1 WHERE no = 1; 
UPDATE student SET class_no = 1 WHERE no = 2;
UPDATE student SET class_no = 1 WHERE no = 3;

INSERT INTO student VALUES(4, '路飞', 13, 2);
INSERT INTO student VALUES(5, '索隆', 15, 2);
INSERT INTO student VALUES(6, '刘备', 14, 3);
INSERT INTO student VALUES(7, '孙权', 16, 3);
INSERT INTO student VALUES(8, '鸣人', 12, 4);
INSERT INTO student VALUES(9, '自来也', 16, 4);

SELECT * FROM class;

SELECT student_name, class_name FROM student, class
WHERE student.class_no = class.no;

SELECT student_name, class_name FROM student
INNER JOIN class ON student.class_no = class.no;



# 创建模式rootShema，权限赋给root
create schema rootschema authorization root;

create schema zackschema authorization root;

select * from rootshema.student;

create table rootschema.student (
  no INTEGER PRIMARY KEY,
  student_name VARCHAR(40),
  age INTEGER,
  has_money DECIMAL(2, 0)
);

INSERT INTO rootschema.student (no, student_name, age, has_money) VALUES(1, '路飞', 13, 10);

grant all privileges on all tables in schema zackschema to zack;


create table zackschema.student (
  no INTEGER PRIMARY KEY,
  student_name VARCHAR(40),
  age INTEGER,
  class_no INTEGER
);


INSERT INTO zackschema.student (no, student_name, age, class_no) VALUES(1, '山治', 13, 1);


drop schema rootshema cascade;



SELECT * FROM pg_depend 
WHERE refobjid = (SELECT oid FROM pg_namespace WHERE nspname = 'rootshema');


select * from zackschema.student;
grant usage on schema zackschema to zack;


create table test02 (
  id1 int,
  id2 int,
  note varchar(20),
  constraint pk_test02 primary key(id1, id2)
);

insert into test02 (id1, id2, note) values (11, 22, '测试数据1');

select * from test02;

create temporary table tmp_t1 (
  id int primary key,
  note text
);

select * from tmp_t1;


drop table rootschema.student;

create table rootschema.student (
  student_no int primary key,
  student_name varchar(40),
  age int
);

create table rootschema.score (
  student_no int,
  chinese_score int,
  math_score int,
  test_date date
);

# 触发器执行函数
create or replace function student_delete_trigger() 
returns trigger
as $$
begin
  delete from rootschema.score where student_no = OLD.student_no;
  return OLD;
end;
$$
language plpgsql;

# 创建触发器
create trigger delete_student_trigger
  after delete on rootschema.student
  for each row execute procedure student_delete_trigger();


insert into rootschema.student values(1, '张三', 14);
insert into rootschema.student values(2, '李四', 13);
insert into rootschema.student values(3, '王二', 15);

select * from rootschema.student;

insert into rootschema.score values (1, 85, 75, date '2013-05-23');
insert into rootschema.score values (1, 80, 73, date '2013-09-18');
insert into rootschema.score values (2, 68, 83, date '2013-05-23');
insert into rootschema.score values (2, 73, 85, date '2013-09-18');
insert into rootschema.score values (3, 72, 79, date '2013-05-23');
insert into rootschema.score values (3, 78, 82, date '2013-05-23');

select * from rootschema.score;

delete from rootschema.student where student_no = 3;

SELECT * FROM pg_trigger;


select ctid, id from student;
