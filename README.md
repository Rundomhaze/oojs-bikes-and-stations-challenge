# OOJS:  Станции и велосипеды

## Краткое описание
В некоторых городах велосипеды можно арендовать на короткое время. [Станции] [изображения станции] расположены в разных частях города. Люди могут арендовать велосипед на одной из станций, поехать на нем туда, куда им нужно, и вернуть велосипед на другой станции. Мы собираемся разработать объекты JavaScript для моделирования велосипедов и станций.


## Версии
### Версия 0:  Разработка на основе предложенных технических характеристик
Предложенные тесты описывают как велосипеды, так и станции. Чтобы запустить тесты, откройте в браузере файл `SpecRunner.html`.  Напишите код, позволяющий пройти тесты. Используйте функции конструктора, чтобы назначить уникальные свойства каждому примеру велосипеда или станции. Используйте прототип конструктора для свойств, общих для разных примеров.

Завершите модель велосипеда, прежде чем приступать к модели станции.


### Версия 1:  Вместимость станции
В своем нынешнем виде наши станции продолжат принимать велосипеды независимо от того, сколько велосипедов в них уже стоит. Сделайте нашу модель более точной, наделив каждую станцию характеристикой вместимости; например, на одной станции могут стоять 30 велосипедов, а на другой – 10. Поставить велосипед на станцию можно будет, только если она ещё не заполнена. Рассмотрите пограничный случай: что произойдет, если группа попытается вернуть одновременно пять велосипедов, но на станции будут места только для двух?  Это подходящий момент,  для того чтобы использовать JavaScript [Error][].

Напишите тесты, которые будут описывать это новое поведение.


### Версия 2:  Велосипеды с поломками
Наши модели велосипедов всегда находятся в прекрасном рабочем состоянии. В реальности у велосипедов могут быть поломки: спущенные шины, порванные цепи и т.д. Дополните модель велосипеда так, чтобы велосипед мог иметь множественные поломки. Мы должны иметь возможность добавить поломки к велосипеду, а затем починить его. Велосипед также должен сообщать, сломан он или нет.
Далее нужно доработать наши объекты станций таким образом, чтобы они могли учитывать сломанные велосипеды. Например, станция не должна выдавать сломанные велосипеды. Она должна уметь сообщать, какое количество велосипедов, стоящих на ней, сломано. Как ещё сломанные велосипеды могут повлиять на станцию?

Напишите тесты, которые будут описывать это новое поведение.


## Краткое описание
Эта задача – ещё одна возможность разработать объекты JavaScript. Вы должны чувствовать себя всё более и более уверенно при работе с функциями и прототипами конструктора. Обратитесь к инструктору, если вам сложно понять эти инструкции с теоретической точки зрения или если у вас не получается использовать их при написании кода.


[изображения станции]: https://www.google.com/search?q=bike+rental+stations&espv=2&biw=1366&bih=647&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjhuaOwsf3LAhUFOiYKHQOZCkwQsAQIGw
[Error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error









___________________________________________________________________________________










# OOJS:  Stations and Bikes

## Summary
In some cities, bikes are made available for short rentals.  [Stations][station images] are set up around the city.  People are able to rent bikes from one station, ride the bike to wherever they're headed, and return the bike at another station.  We're going to develop JavaScript objects to model bikes and stations.


## Releases
### Release 0:  Design to the Specs
Tests are provided that describe both bikes and stations.  To run the tests, open the `SpecRunner.html` file in the browser.  Write code to make the tests pass.  Use the constructor functions to assign properties unique to each instance of a bike or station.  Use the constructor's prototype for properties shared among instances.

Complete the bike model before moving to the station.


### Release 1:  Station Capacity
As it currently stands, our stations will continue taking bikes regardless of how many bikes they already hold.  Make our model more accurate by giving each station a capacity; for example, one station might be able to store 30 bikes and another only 10.  A station should only take bikes if it's not already full.  Consider an edge case: what would happen if a group tried to return five bikes at the same time but the station only has room for two bikes? Here is a good time to consider raising a JavaScript [Error][].

Write tests that describe these new behaviors.


### Release 2:  Bikes have Mechanical Problems
Our bike models are always in perfect working order.  In reality, bikes have problems:  flat tires, broken chains, etc.  Update the bike model, so that a bike can have multiple mechanical issues.  We should be able to add issues to a bike and then make repairs.  A bike should also report whether or not it's damaged.

Our station objects should then be updated to account for damaged bikes.  For example, a station should not release a damaged bike.  It should be able to report how many of its bikes are damaged.  How else would damaged bikes affect a station?

Write tests that describe these new behaviors.


## Summary
This challenge is another opportunity to design JavaScript objects.  We should be feeling more and more comfortable working with constructor functions and prototypes.  Checkin with an instructor if we're struggling to understand these conceptually or struggling to implement them in code.


[station images]: https://www.google.com/search?q=bike+rental+stations&espv=2&biw=1366&bih=647&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjhuaOwsf3LAhUFOiYKHQOZCkwQsAQIGw
[Error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
