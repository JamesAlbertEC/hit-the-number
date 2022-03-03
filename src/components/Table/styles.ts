import styled from "styled-components";

export const Container = styled.div`

  table {
    width: 100%;
    border-spacing: 0.5rem 0.5rem;
    background-color: var(--primary-medium);
    border-radius: 0.5rem;
        
    tr {
      display: flex;
      justify-content: space-between;
             
      th {
        padding: 1rem 2rem;
        line-height: 1rem;
        text-align: left;
        margin: 0.1rem 0 0 0.1rem;
      }

      td {
        padding: 1rem 2rem;
        border: 0;
        background: white;
        border-radius: 0.25rem;
        background-color: var(--secondary-low);
        margin: 0.1rem 0 0 0.1rem;
      }
    }
  }
`; 