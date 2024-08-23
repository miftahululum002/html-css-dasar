const background = document.querySelector(".background");

document.addEventListener("mousemove", (e) => {
    console.log("bergerak");
    const { clientX, clientY } = e;
    const xOffset = (clientX / window.innerWidth) * 100;
    const yOffset = (clientY / window.innerHeight) * 100;

    background.style.transform = `translate(-${xOffset}%, -${yOffset}%)`;
});
