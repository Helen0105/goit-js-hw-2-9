let e=document.querySelector(".name-input"),t=document.querySelector(".phone-input"),u=document.querySelector(".btn"),n=document.querySelector(".contact-list");u.onclick=()=>{let u=document.createElement("li");u.innerHTML=`
        <span><strong>${e.value}</strong>: ${t.value}</span>
        <button class="delete-btn">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
    `,u.querySelector(".delete-btn").onclick=()=>{u.remove()},n.appendChild(u),e.value="",t.value=""};
//# sourceMappingURL=goit-js-hw-2-9.4ee1179f.js.map
