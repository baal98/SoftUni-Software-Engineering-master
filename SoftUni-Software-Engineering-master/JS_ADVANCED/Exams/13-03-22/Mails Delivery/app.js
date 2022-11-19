function solve() {
    let addBtn = document.querySelector('#add');
    let resetBtn = document.querySelector('#reset');
    let recipientName = document.querySelector('#recipientName');
    let title = document.querySelector('#title');
    let message = document.querySelector('#message');
    let list = document.querySelector('#list');
    let sentList = document.querySelector('.sent-list');
    let deleteList = document.querySelector('.delete-list');

    addBtn.addEventListener('click', addMail);
    resetBtn.addEventListener('click', reset);
    list.addEventListener('click', sendMail);
    sentList.addEventListener('click', deleteMail);

    function addMail(e) {
        e.preventDefault();
        if (recipientName.value !== '' && title.value !== '' && message.value !== '' && recipientName.value.trim() !== '' && title.value.trim() !== '' && message.value.trim() !== '') {
            let li = document.createElement('li');
            let h4Title = document.createElement('h4');
            let h4Recipient = document.createElement('h4');
            let span = document.createElement('span');
            let div = document.createElement('div');
            let sendBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');

            h4Title.textContent = `Title: ${title.value}`;
            h4Recipient.textContent = `Recipient Name: ${recipientName.value}`;
            span.textContent = message.value;
            sendBtn.textContent = 'Send';
            deleteBtn.textContent = 'Delete';

            div.id = 'list-action';
            sendBtn.id = 'send';
            deleteBtn.id = 'delete';

            div.appendChild(sendBtn);
            div.appendChild(deleteBtn);
            li.appendChild(h4Title);
            li.appendChild(h4Recipient);
            li.appendChild(span);
            li.appendChild(div);
            list.appendChild(li);

            recipientName.value = '';
            title.value = '';
            message.value = '';
        }
    }

    function reset(e) {
        e.preventDefault();
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }

    function sendMail(e) {
        if (e.target.id === 'send') {
            let li = e.target.parentElement.parentElement;
            let recipient = li.children[1].textContent.split(': ')[1];
            let title = li.children[0].textContent.split(': ')[1];
            let sentLi = document.createElement('li');
            let spanRecipient = document.createElement('span');
            let spanTitle = document.createElement('span');
            let div = document.createElement('div');
            let deleteBtn = document.createElement('button');

            spanRecipient.textContent = `To: ${recipient}`;
            spanTitle.textContent = `Title: ${title}`;
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('Mdelete');

            div.appendChild(deleteBtn);
            sentLi.appendChild(spanRecipient);
            sentLi.appendChild(spanTitle);
            sentLi.appendChild(div);
            sentList.appendChild(sentLi);
            li.remove();
        }

        if (e.target.id === 'delete') {
            e.target.parentElement.parentElement.remove();
            let li = e.target.parentElement.parentElement;
            let recipient = li.children[0].textContent.split(': ')[1];
            let title = li.children[1].textContent.split(': ')[1];
            let deleteLi = document.createElement('li');
            let spanRecipient = document.createElement('span');
            let spanTitle = document.createElement('span');

            spanRecipient.textContent = `To: ${recipient}`;
            spanTitle.textContent = `Title: ${title}`;

            deleteLi.appendChild(spanRecipient);
            deleteLi.appendChild(spanTitle);
            deleteList.appendChild(deleteLi);
            li.remove();
        }


    }

    function deleteMail(e) {
        if (e.target.classList.contains('Mdelete')) {
            let li = e.target.parentElement.parentElement;
            let recipient = li.children[0].textContent.split(': ')[1];
            let title = li.children[1].textContent.split(': ')[1];
            let deleteLi = document.createElement('li');
            let spanRecipient = document.createElement('span');
            let spanTitle = document.createElement('span');

            spanRecipient.textContent = `To: ${recipient}`;
            spanTitle.textContent = `Title: ${title}`;

            deleteLi.appendChild(spanRecipient);
            deleteLi.appendChild(spanTitle);
            deleteList.appendChild(deleteLi);
            li.remove();
        }
    }
}

solve();