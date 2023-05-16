function form(){
    function cadastrarVideo(e) {
        e.preventDefault()
    }

    return (
        <div>
            <p>Novo Video</p>
            <form onSubmit={cadastrarVideo}>
                <div>
                    <input type="text" placeholder="Titulo"/>
                </div>
                <div>
                    <input type="text" placeholder="Categoria"/>
                </div>
                <div>
                    <input type="text" placeholder="Descrição"/>
                </div>
                <div>
                    <input type="text" placeholder="Link para o video"/>
                </div>
            </form>
        </div>
    )
}