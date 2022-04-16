const newFormHandler = async(event) => {event.preventDefault();
    const name = document.querySelector('#postName').value.trim();
    const description = document.querySelector('#postDesc').value.trim();

    if (name && description){
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({name, description}),
            header:{'Content-Type': 'application/json'}
        });
        if(response.ok){document.location.replace('/profile');}
        else{alert('Failed post');}
    }};

    const delButtonHandler = async(event) =>{
        if(event.target.hasAttribute('data-id')){
            const id = event.target.getAttributes('data-id');
            const response = await fetch(`/api/posts/${id}`, {method:'DELETE'});
            if (response.ok){document.location.replace('/profile');}
            else{alert('Failed delete');}
        }};

    document.querySelector('.newPost').addEventListener('submit', newFormHandler);
    document.querySelector('postList').addEventListener('click', delButtonHandler);