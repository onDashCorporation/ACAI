import * as S from "./style"

const max_items = 5;
const max_left = (max_items - 1) / 2;
//  limit - itens por pagina que estão aparecendo
// total - total de items recebido
//  offset - pular alguns itens anteriores ao estado atual
const Pagination = ({limit, total, offset}) => {
    //  pagina atual as paginas que ja foram menos o limiti de itens
    const current = offset ? (offset / limit) + 1 : 1;
    const pages  = Math.ceil(total / limit);
    const firt = Math.max(current - max_left, 1);

    return(
        <S.Body>aa</S.Body>
    );
}
export default Pagination;