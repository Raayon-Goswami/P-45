
class buttonElements1{

constructor(x,y,elementName){
   var button=createButton(elementName)
   this.elementName = elementName
    button.position(x,y)
    button.size(40,40)
    button.style('background-color',"red")
    button.mousePressed(()=>{
        var infoObj = new info(elementName)
    })
}

}