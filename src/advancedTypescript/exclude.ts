//-------------------------------------------------------EXCLUDE---------------------------------------------------------------------
// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it

type EventType = 'click'| 'mousemove' | 'scroll';

type ExcludeEvent = Exclude<EventType,'scroll'> // so in this type there will be only 'click' | 'mousemove';

const handleEvent = (event : ExcludeEvent) =>{
    console.log(`Handling event ${event}`);
    
}
handleEvent('click');
