const CajaTexto = ({ texto, setTexto }) => {
    const handleChange = (event) => {
        setTexto(event.target.value);
    };
    return <input type="text" value={texto} onChange={handleChange} />;
};
export default CajaTexto;
