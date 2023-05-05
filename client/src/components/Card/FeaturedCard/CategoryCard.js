import { Link } from "react-router-dom";
import "./CategoryCard.css";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const CategoryCard = (props) => {
  const { t } = useTranslation();

  return (
    <div className="category__card__card">
      <div className="category__image">
        <img src={props.data.image} alt="" className="product__img" />
      </div>
      <div className="category__card__detail">
        <div className="category__name">
          {/* <span>{props.data.name}</span> */}
        </div>
        <div className="category__card__action">
          <Link to={props.data.url}>
            <Button
              variant="outlined"
              sx={[
                {
                  "&:hover": {
                    backgroundColor: "none",
                    borderColor: "pink",
                    color: "pink",
                  },
                  borderRadius: "20px",
                  borderColor: "pink",
                  backgroundColor: "pink",
                  color: "#000",
                  fontWeight: "700",
                },
              ]}
            >
              {t("SHOPNOW")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
