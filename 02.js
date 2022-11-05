let lists = document.querySelectorAll(".as-imagegrid-item");
function reducers(...arg) {
    let mylist =[];
    for(a of arg) {
        let replace_items = a.innerText.replace("\nSupport", "");
        mylist.push(replace_items);
    };
    console.log(mylist);
};
reducers(...lists);