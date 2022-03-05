import React from 'react'
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';

const LCAIndicators = ({energy, batch}) => {
  return (
    <div>
    <div className="lca-container">
    <div className='lca-indicators'>
        <table className='lca-table'>
        <caption>Life Cycle Assessment Indicators</caption>
        <thead>
            <th>Indicators</th>
            <th>Measurements</th>
            <th>Values</th>
            <th>Units</th>
        </thead>
        <tbody>
        <tr>
            <th rowspan='1'>Energy consumption <GiIcons.GiElectric/></th>
            <th>Amount of energy consumption per unit of product</th>
            <td>{energy/batch}</td>
            <td>kWh/ unit of product</td>
        </tr>
        <tr>
            <th rowspan="2">Energy efficiency <MdIcons.MdPowerOff/></th>
            <th>Amount of reduced energy per unit of product</th>
            <td>energyred/batch</td>
            <td>kWh/ unit of product</td>
        </tr>
        <tr>
            <th>Percentage of energy reduced per unit of product</th>
            <td>energyred/energy</td>
            <td>%</td>
        </tr> 
        <tr>
            <th rowspan='3'>Renewable energy <GiIcons.GiWindTurbine/></th>
            <th>Type of renewable energy used in product production </th>
            <td>renewenergytype</td>            
            <td></td>
        </tr>  
        <tr>
            <th>Amount of renewable energy used per unit of product</th>
            <td>renewenergy/batch</td>
            <td>kWh/ unit of product</td>
        </tr> 
        <tr>
            <th>Percentage of renewable energy used per unit of product</th>
            <td>renewenergy/energy</td>
            <td>%</td>
        </tr>
        <tr>
            <th rowspan='1'>Water consumption <GiIcons.GiWaterDrop/></th>
            <th>Amount of water consumption per unit of product</th>
            <td>water/batch</td>
            <td>m3/ unit of product</td>
        </tr>
        <tr>
            <th rowspan='2'>Recycled/reused water <GiIcons.GiWaterRecycling/></th>
            <th>Amount of recycled/reused water per unit of product</th>
            <td>waterrec/batch</td>
            <td>m3/ unit of product</td>
        </tr>
        <tr>
            <th>Percentage of recycled/reused water per unit of product</th>
            <td>waterrec/water</td>
            <td>%</td>
        </tr>
        <tr>
            <th rowspan='1'>Material consumption <AiIcons.AiFillGold/><AiIcons.AiFillGold/></th>
            <th>Amount of materials other than water used per unit of product</th>
            <td>material/batch</td>
            <td>kg or t/ unit of product</td>
        </tr>
        <tr>
            <th rowspan='2'>Material efficiency <AiIcons.AiFillGold/></th>
            <th>Amount of reduced materials per unit of product</th>
            <td>materialred/batch</td>
            <td>kg or t/ unit of product</td>
        </tr>
        <tr>
            <th>Percentage of reduced materials per unit of product</th>
            <td>materialred/material</td>
            <td>%</td>
        </tr>
        <tr>
            <th rowspan='2'>Recycled/reused materials <BiIcons.BiRecycle/></th>
            <th>Amount of recycled/reused materials per unit of product</th>
            <td>materialrec/batch</td>
            <td>kg or t/ unit of product</td>
        </tr>
        <tr>
            <th>Percentage of recycled/reused materials per unit of product</th>
            <td>materialrec/material</td>
            <td>%</td>
        </tr>
        <tr>
            <th rowspan='1'>Greenhouse gas emission <GiIcons.GiGreenhouse/></th>
            <th>Amount of greenhouse gas emission per unit of product</th>
            <td>ghg/batch</td>
            <td>tonnes of CO2e/ unit of product</td>
        </tr>
        <tr>
            <th rowspan='3'>Pollution management <GiIcons.GiChemicalDrop/></th>
            <th>Amount of water pollution per unit of product</th>
            <td>waterpol/batch</td>
            <td>m3/ unit of product</td>
        </tr>
        <tr>
            <th>Amount of soil pollution per unit of product</th>
            <td>soilpol/batch</td>
            <td>kg or t/ unit of product</td>
        </tr>
        <tr>
            <th>Amount of air emission (NOx, SOx) per unit of product</th>
            <td>air/batch</td>
            <td>t/ unit of product</td>
        </tr>
        <tr>
            <th rowspan='1'>Use and release of hazardous materials <GiIcons.GiNuclearWaste/></th>
            <th>Amount of hazardous materials used per unit of product</th>
            <td>hazmat/batch</td>
            <td>kg or t/ unit of product</td>
        </tr>
        <tr>
            <th rowspan='2'>Waste management <GiIcons.GiTrashCan/></th>
            <th>Amount of solid waste generated per unit of product</th>
            <td>soilwaste/batch</td>
            <td>kg or t/ unit of product</td>
        </tr>
        <tr>
            <th>Amount of waste water generated per unit of product</th>
            <td>waterwaste/batch</td>
            <td>m3/ unit of product</td>
        </tr>
        </tbody>
        </table>
    </div>
    </div>
    </div>
  )
}

export default LCAIndicators


	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
