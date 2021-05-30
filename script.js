//getting all elements with tag <code>
code = document.getElementsByTagName('code')

//changes all tags with <code> to make them in div and pre tags
const manupulate=(collection)=>{
    Array.from(collection).map((ele)=>{
        text=ele.textContent
        ele.innerHTML=`<div class="container" >
            <div class="code">
           <button class="copy" onClick=copy(this) >Copy</button>
          <pre class="pre"></pre>
      </div>
      </div>`;
      ele.querySelector(".pre").innerText=text
    })
}

//calling function
manupulate(code)

//change text to copied for some time and then reset to copy
const copiedEffect=(element)=>{
    element.innerText='Copied !!'
    setTimeout(()=>element.innerText='Copy',450);
}

// function called on clicking the copy button
const copy=(e)=>{
    text=e.offsetParent.innerText
    text=text.slice(5,)
    const cb = navigator.clipboard;
    cb.writeText(text).then(() => copiedEffect(e));
}

