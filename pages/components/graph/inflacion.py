import os
import plotly.graph_objects as go
import requests
from datetime import datetime, timedelta

# Función para obtener datos desde la API
def obtener_datos_inflacion():
    url = 'https://api.argentinadatos.com/v1/finanzas/indices/inflacion'
    headers = {'Content-Type': 'application/json'}
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Genera una excepción si el estado no es 200
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        print(f"Error al obtener datos: {e}")
        return None

# Función para procesar los datos
def procesar_datos(data):
    try:
        fechas = [datetime.strptime(item['fecha'], '%Y-%m-%d') for item in data]
        indices = [item['valor'] for item in data]
        return fechas, indices
    except KeyError:
        print("Error: Formato inesperado de los datos de la API")
        return None, None

# Función para crear y guardar el gráfico
def crear_grafico(fechas, indices):
    # Filtrar los últimos 6 meses
    fecha_hoy = max(fechas)
    fecha_6_meses = fecha_hoy - timedelta(days=6 * 30)  # Aproximadamente 6 meses

    fig = go.Figure()

    # Trazar todos los datos
    fig.add_trace(go.Scatter(
        x=fechas,
        y=indices,
        mode='lines+markers',
        marker=dict(color='rgba(102, 178, 255, 0.8)', size=6),  # Azul claro
        line=dict(color='rgba(102, 178, 255, 1)', width=2),  # Línea azul
        hovertemplate="<b>Fecha:</b> %{x}<br><b>Índice:</b> %{y:.2f}<extra></extra>",
        name="Todos los datos"
    ))

    fig.update_layout(
        title=None,  # Sin título
        xaxis=dict(
            showgrid=True,
            gridcolor='rgba(255,255,255,0.1)',
            rangeslider=dict(visible=True),  # Barra horizontal de navegación
            rangeselector=dict(
                buttons=[
                    dict(count=1, label="1m", step="month", stepmode="backward"),
                    dict(count=6, label="6m", step="month", stepmode="backward"),
                    dict(count=12, label="1y", step="month", stepmode="backward"),
                    dict(step="all", label="Todo")
                ],
                activecolor="rgb(255, 99, 132)",  # Color activo en el rango
                bgcolor="rgba(0, 0, 0, 0.6)",  # Fondo del selector
                font=dict(color="white")  # Color del texto
            ),
            range=[fecha_6_meses, fecha_hoy]  # Mostrar los últimos 6 meses inicialmente
        ),
        yaxis=dict(
            title="Índice de Inflación",
            showgrid=True,
            gridcolor='rgba(255,255,255,0.1)'
        ),
        template="plotly_dark",
        font=dict(family="Arial, sans-serif", size=12, color="white"),
        margin=dict(l=10, r=10, t=10, b=10),  # Márgenes reducidos
        height=400  # Altura ajustada para mobile
    )

    # Crear el directorio 'public' si no existe
    os.makedirs("public", exist_ok=True)

    # Guardar el gráfico como archivo HTML
    output_path = "public/grafico_inflacion.html"
    fig.write_html(output_path)
    print(f"Gráfico guardado como {output_path}")

# Ejecución principal
if __name__ == "__main__":
    datos = obtener_datos_inflacion()
    if datos:
        fechas, indices = procesar_datos(datos)
        if fechas and indices:
            crear_grafico(fechas, indices)