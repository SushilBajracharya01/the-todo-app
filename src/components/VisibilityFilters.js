import React from "react";
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = (props) => {
    const { setFilter, activeFilter } = props;
  return (
    <div className="p-2 visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            className={`m-1 m-sm-5 filter ${currentFilter === activeFilter && "filter--active"}`}
            key={`visibility-filter-${currentFilter}`}
            onClick={() => {setFilter(filterKey)} /** waiting for setFilter handler*/}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
    let filter = state.visibilityFilter;
    let activeFilter = filter.toLowerCase();
    return { activeFilter}
}

export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
