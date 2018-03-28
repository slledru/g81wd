create table if not exists iris (
  id bigserial primary key not null,
  species varchar(50) not null,
  sepal_len_cm real not null,
  sepal_width_cm real not null,
  petal_len_cm real not null,
  petal_width_cm real not null
);

insert into iris(species) values('setosa');

truncate iris;

alter table iris alter column species set not null;
alter table iris alter column sepal_len_cm set not null;
alter table iris alter column sepal_width_cm set not null;
alter table iris alter column petal_len_cm set not null;
alter table iris alter column petal_width_cm set not null;

insert into iris(species,sepal_len_cm,sepal_width_cm,petal_len_cm,petal_width_cm)
  values('setosa', 1.2, 1.3, 1.5, 2.0);

update iris set species = 'daisy' where id=2;
  
