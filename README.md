# drf & vue demo

> django-rest-framework and vueJs sample demo.

### Chinese Vedio Tutorial

1. [老男孩 第七期 django rest framework 实战和源码剖析](https://www.bilibili.com/video/av28871471/?p=1)
2. [老男孩 9期 django+vue 104 day 之后 ~](https://www.bilibili.com/video/av33573600/?p=773)



## 0. Clone Project

```
git clone https://github.com/625781186/django-rest-framework-vueDemo.git
```


## 1. Vue Build Setup

``` bash
cd django-rest-framework-vueDemo/Vvue

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

open "http://localhost:8080/#/course" in browser.(not show course detail in course page)
```

![django server not start](https://i.loli.net/2018/11/23/5bf7de151d1b2.png)
django server not start


## 2. Django Build Setup

<font color="#dd0000"> !!! if 1.10<= your django version<2  :  please change project's all `urls.py` .</font >

```bash
# install dependencies
pip install django
pip install djangorestframework

cd django-rest-framework-vueDemo/dj_Pro

# serve with hot reload at localhost:8000
python managy.py runserver

# open "http://localhost:8000/v1/api/course"
Press F5 update  "http://localhost:8080/#/course" in browser.(display course detail in course page)

```

![django server start](https://i.loli.net/2018/11/23/5bf7de4977a72.png)
django server start

## 3. Project WIKI

[vue use axiso to get data from drf and solve csrf problem .](https://github.com/625781186/django-rest-framework-vueDemo/wiki/vue-use-axiso-to-get-data-from-drf-and-solve-csrf-problem-.)



# Feature:

build vue as django static's source.

https://github.com/tmpbook/django-with-vuejs