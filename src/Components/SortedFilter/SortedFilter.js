import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as productActions from "../../Redux/Product/product-actions";

import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const sortOptions = [
  { value: "ascending", label: "Ascending" },
  { value: "descending", label: "Descending" },
];

export default function SortedProductList() {
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();

  const sortOrder =
    new URLSearchParams(location.search).get("sortBy") ?? "ascending";

  const onSortOrderChange = (order) => {
    history.push({ ...location, search: `sortBy=${order}` });
    dispatch(productActions.sortProduct(order));
  };

  useEffect(() => {
    if (location.search !== "") {
      return;
    }

    history.push({ ...location, search: `sortBy=ascending` });
  }, [history, location]);

  return (
    <>
      <Box sx={{ marginTop: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            In alphabet order
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortOrder}
            label="In alphabet order"
            onChange={(evt) => onSortOrderChange(evt.target.value)}
          >
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
