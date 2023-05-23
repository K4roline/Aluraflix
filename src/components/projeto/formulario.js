function Formulario() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Título"/>
            </div>
            <div>
                <select name="categoria">
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="text" placeholder="Descrição"/>
            </div>
            
            <input type="submit" value="Salvar video"/>
        </form>
    )
}

export default Formulario