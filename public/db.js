// rtlistener
db.collection('Weather').onSnapshot((snapshot) => {
    //console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        //console.log(change, change.doc.data(), change.doc.id);
        if(change.type === 'added') {
            //add doc to page
            renderWeather(change.doc.data(), change.doc.id);
        }
        if(change.type === 'removed') {
            //remove data
        }
    });
})