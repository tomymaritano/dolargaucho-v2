export async function getServerSideProps() {
    try {
        const res = await fetch('https://dolarapi.com/v1/dolares');
        if (!res.ok) {
            throw new Error(`Failed to fetch, status: ${res.status}`);
        }
        let data = await res.json();

        // Transformar los nombres específicos
        data = data.map((item: { nombre: string }) => {
            if (item.nombre === 'Contado con liquidación') {
                return { ...item, nombre: 'CCL' };
            }
            return item;
        });

        return { props: { data } };
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return { props: { data: [] } }; // Devuelve un arreglo vacío si hay un error
    }
}