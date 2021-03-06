package tutorial.webapp

// ScalaJS imports:

import org.scalajs.dom
import org.scalajs.dom.{Element, document}

import scala.collection.mutable.{ArrayBuffer, ListBuffer}

object TutorialApp {

  def main(args: Array[String]): Unit = {
    println("Hello ScalaJS! Iteration 4.")
    document.addEventListener("DOMContentLoaded", { e: dom.Event => setupUI() })
  }


  def setupUI(): Unit = {
    val elems = new ListBuffer[Element]

    if (document.getElementById("scala-webapp") == null) {
      // App-div
      val app = document.createElement("div")
      app.id = "scala-webapp"
      document.body.appendChild(app)
    }

    // First paragraph
    val intro = document.createElement("p")
    intro.textContent = "This web-page was generated using Scala, which was compiled to JavaScript with ScalaJS."
    elems += intro

    // Header for appending-section.
    elems += document.createElement("hr")
    val header2 = document.createElement("h3")
    header2.textContent = "Directing Text to Evaluation Class"
    elems += header2

    val textarea1 = document.createElement("textarea")
    textarea1.id = "repl-window"
    elems += textarea1


    val container2 = document.createElement("ul")
    container2.id = "eval-test-container"
    elems += container2

    // Header for appending-section.
    elems += document.createElement("hr")
    val header3 = document.createElement("h3")
    header3.textContent = "Appending Elements to the DOM"
    elems += header3


    // Paragraph button
    val button = document.createElement("button")
    button.textContent = "Add paragraph"
    button.addEventListener("click", { (e: dom.MouseEvent) => addClickedMessage() })
    elems += button

    // Clear button
    val button2 = document.createElement("button")
    button2.textContent = "Clear section"
    button2.addEventListener("click", { (e: dom.MouseEvent) => removeAllMessages() })
    elems += button2

    val appendDiv = document.createElement("div")
    appendDiv.id = "append-test"
    elems += appendDiv

    elems += document.createElement("hr")
    elems.foreach(f => document.getElementById("scala-webapp").appendChild(f))

    // We could just integrate this.
    appendPar(document.getElementById("scala-webapp"), "All elements above generated using ScalaJS")
  }

  // Use if you need to call from raw js.
  // @JSExportTopLevel("addClickedMessage")
  def addClickedMessage(): Unit = {
    val clicks = howManyClicks()
    appendPar(document.getElementById("append-test"),
      text = "Button clicked " + clicks + (if (clicks < 2) " time!" else " times!"))
  }

  def howManyClicks(): Int = {
    var count: Int = 1
    applyToEachTagWithContent("p", "Button clicked ", (e) => {
      count = count + 1
    })
    count
  }

  def appendPar(targetNode: dom.Node, text: String): Unit = {
    val pNode = document.createElement("p")
    pNode.textContent = text
    targetNode.appendChild(pNode)
  }

  def removeAllMessages(): Unit = {
    applyToEachTagWithContent("p", "Button clicked ", (e) => {
      e.parentNode.removeChild(e)
    })
  }

  def applyToEachTagWithContent(tag: String, content: String, func: (Element) => Unit): Unit = {
    val x = document.getElementsByTagName(tag)
    val elemList = ArrayBuffer[Element]()
    for (y <- 0 to (x.length - 1)) {
      elemList += x.apply(y)
    }
    elemList.foreach(e => {
      if (e.textContent.startsWith(content)) {
        func(e)
      }
    })
  }


}
