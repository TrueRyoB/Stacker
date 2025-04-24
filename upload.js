const endpoint = "https://script.google.com/macros/s/AKfycbzGG44jt4ENLjWphkRj8o8yW9ChMduhvp0OmUa2U-wViX-Ju8q7QJIjpacrL97yBAgJ0w/exec";

(function() {
    if (typeof window !== "undefined") {
        window.uploadLib = window.uploadLib || {};
        window.uploadLib.handleSubmit = handleSubmit;
    }
})();

async function handleSubmit(email, content) {
    const formData = {
        email: email,
        date: Date.prototype.toLocaleDateString(),
        message: content,
    };

    try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const ip = ipData.ip;
        
        const response = await fetch(endpoint + "?ip=" + ip, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            alert("テスト：送信成功！");
        } else {
            alert("テスト：送信に失敗しました！");
        }
    } catch (error) {
        alert("テスト：エラーが発生しました。もう一度試してください。");
    }
}