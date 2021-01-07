import CatalogCard from "./Catalog-card/Catalog-card"
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import catStyle from './Catalog.module.css';

const catalog = (props) => {

    let categoryCards = null;

    let categoryName = null;
    if (props.selectedCategory !== null) {
        categoryName = props.selectedCategory
    }

    if (props.categories !== null) {
        categoryCards = props.categories.map(category => <CatalogCard category={category} showSubCategories={props.showSubCategories}></CatalogCard>)
    }

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" className={catStyle.brd_crm_color}>
                <Link color="textPrimary" className={catStyle.brd_crm_link} onClick={() => props.showCategories(props.catalogFilter)}>
                    Equipment Catalog
                </Link>
                <Typography color="textPrimary">{categoryName}</Typography>
            </Breadcrumbs>
            <div className = {catStyle.ctlg_wndw}>{categoryCards}</div>
        </div>
    )
}

export default catalog;