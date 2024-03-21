 import PropTypes from 'prop-types';
  import { Table,Button } from 'antd';
  
  const TableMain = ({ dataSource, columns, showDeleteOption }) => {
    const columnsWithDeleteOption = [...columns]; // Clonar as colunas existentes
  
    // Adicionar uma coluna para a opção de exclusão, se necessário
    if (showDeleteOption) {
      columnsWithDeleteOption.push({
        title: '',
        key: 'action',
        render: (text, record) => (
          <Button type="link" onClick={() => handleDelete(record.key)}>Delete</Button>
        ),
      });
    }
  
    const handleDelete = (key) => {
      // Lógica para exclusão do item
    };
  
    return <Table dataSource={dataSource} columns={columnsWithDeleteOption} />;
  };
  
  TableMain.propTypes = {
    dataSource: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    showDeleteOption: PropTypes.bool, // Prop opcional para mostrar ou não a opção de exclusão
  };
  
  export default TableMain;
  
