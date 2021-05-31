//changes all tags with <code> to make them in div and pre tags
const manupulate=(collection)=>{
    Array.from(collection).map((ele)=>{
        text=ele.textContent
        ele.innerHTML=`<div class="container-code" >
            <div class="code-code">
           <button class="copy-code" onClick=copy(this) >Copy</button>
          <pre class="pre-code"></pre>
      </div>
      </div>`;
      ele.querySelector(".pre-code").innerText=text
    })
}


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

//calling function
//getting all elements with tag <code>
//window.onload to prevent run js without html if js fetched in head
window.onload=()=>{
    code = document.getElementsByTagName('code')
    manupulate(code)
}

