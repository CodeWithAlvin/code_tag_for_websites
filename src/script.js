//changes all tags with <code> to make them in div and pre tags
const manupulate=(collection)=>{
    Array.from(collection).map((ele)=>{
        text=ele.textContent;
        ele.innerHTML=`<div class="container-code" >
            <div class="code-code dark_code">
            <div class="controls-code dark_nav">
                <img class="svg" src="src/svg/code.svg">
                <img class="svg night" id="theme" onClick=theme(this) src="src/svg/sun.svg">
                <img class="svg" id="copy" onClick=copy(this) src="src/svg/clipboard.svg">
            </div>   
          <pre class="pre-code"></pre>
      </div>
      </div>`;
      ele.querySelector(".pre-code").textContent=text;
    })
}


//change svg to check for some time and then reset to clipboard svg
const copiedEffect=(element)=>{
    element.src="/src/svg/check.svg";
    setTimeout(()=>element.src='/src/svg/clipboard.svg',450);
}

// function called on clicking the copy button
const copy=(e)=>{
    let text=e.parentElement.parentElement.querySelector(".pre-code").textContent;
    const cb = navigator.clipboard;
    cb.writeText(text).then(() => copiedEffect(e));
}

//handle class adding and removing and src changing
const handleTheme=(element)=>{
    element.querySelector(".controls-code").classList.toggle("light_nav");
    element.classList.toggle("light_code");
    element.querySelector(".controls-code").classList.toggle("dark_nav");
    element.classList.toggle("dark_code");
    element.querySelector("#theme").classList.toggle("night")
    if (element.querySelector("#theme").classList.contains("night")){
    element.querySelector("#theme").src="/src/svg/sun.svg"
    }
    else{
    element.querySelector("#theme").src="/src/svg/moon.svg"
    }
}

//function called when clicked on theme icon
const theme=(e)=>{
    elements=document.getElementsByClassName("code-code");
    Array.from(elements).map((element)=>handleTheme(element));
};


//calling function
//getting all elements with tag <code>
//window.onload to prevent run js without html if js fetched in head
window.onload=()=>{
    code = document.getElementsByTagName('code');
    manupulate(code);
};

