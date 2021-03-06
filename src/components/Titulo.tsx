interface TitulProps {
  titulo: string;
}

function Titulo({ titulo }: TitulProps) {
  
  return (
    <h1 style={{
      color: "#7D2EBA", 
      fontWeight: 600,
      fontStyle: 'italic',
      textAlign: 'center',
      marginBottom: '60px'    
    }}>{titulo}</h1>
  );
}

export default Titulo