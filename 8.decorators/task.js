function cachingDecoratorNew(func) {
  const cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.findIndex((item) => item === func(...args)); 
    if (objectInCache>=0) { // если элемент найден
        console.log("Из кэша: " + cache[objectInCache]); 
        console.log(cache);
        return "Из кэша: " + cache[objectInCache];
    }
    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push(result) ; 
    if (cache.length > 5) { 
      cache.shift(); 
    }
    console.log("Вычисляем: " + result);
    console.log(cache);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timerId = null;
  function wrapper(...args) {
    wrapper.allCount ++;
    if (timerId === null) {
      func.apply(this, args);
      timerId = 1;
      wrapper.count ++;
      return;
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
      wrapper.count ++;
    }, ms);
  }
  wrapper.count = 0; // количество отправок сигнала
  wrapper.allCount = 0; // всего вызовов
  return wrapper;
}

function debounceDecorator2(func) {
  // посчитано в функции debounceDecoratorNew(func, ms)
}
