package com.example.gis;

/**
 * Created by Paser on 2018/12/26.
 */
public class test
{
    public static void main(String[] args) {
        String a="0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.33000001311302185,\n" +
                "      0.25, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.12999999523162842, -0.0, 0.6499999761581421,\n" +
                "      0.44999998807907104, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.03999999910593033, -0.1899999976158142,\n" +
                "      0.4300000071525574, 0.23999999463558197, 0.44999998807907104, 0.23000000417232513, 0.4399999976158142, 0.0, 0.0,\n" +
                "      0.0, 0.0, 0.0, 0.0, 0.0, -0.1599999964237213, 0.0, -0.019999999552965164, -0.05000000074505806,\n" +
                "      0.23000000417232513, 0.3700000047683716, 0.550000011920929, 0.2800000011920929, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,\n" +
                "      0.0, -0.11999999731779099, -0.33000001311302185, 0.05999999865889549, 0.12999999523162842, 0.3199999928474426,\n" +
                "      0.28999999165534973, 0.2800000011920929, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.20999999344348907,\n" +
                "      -0.30000001192092896, -0.8199999928474426, -0.27000001072883606, -0.019999999552965164, 0.23000000417232513,\n" +
                "      0.20000000298023224, 0.10000000149011612, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.12999999523162842,\n" +
                "      -0.1899999976158142, -0.18000000715255737, -0.44999998807907104, 0.11999999731779099, -0.05000000074505806,\n" +
                "      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.20999999344348907, -0.1899999976158142, -0.27000001072883606,\n" +
                "      -0.6499999761581421, -0.3199999928474426, -0.3199999928474426, -0.07000000029802322, 0.0, 0.0, 0.0, 0.0, 0.0,\n" +
                "      0.0, 0.0, -0.23999999463558197, -0.14000000059604645, -0.15000000596046448, -0.09000000357627869,\n" +
                "      -0.3799999952316284, -0.33000001311302185, -0.17000000178813934, -0.28999999165534973, 0.0, 0.0,\n" +
                "      0.0, 0.0, 0.0, 0.0, 0.0, -0.03999999910593033, -0.17000000178813934, 0.07000000029802322,\n" +
                "      -0.27000001072883606, -0.10999999940395355, -0.1899999976158142, -0.019999999552965164, 0.0, 0.0,\n" +
                "      0.0, 0.0, 0.0, 0.0, 0.0, -0.14000000059604645, -0.05999999865889549, -0.05000000074505806, -0.36000001430511475,\n" +
                "      -0.3700000047683716, -0.20000000298023224, -0.20999999344348907, -0.09000000357627869, 0.0, 0.0, 0.0, 0.0,\n" +
                "      0.0, 0.0, 0.0, 0.05000000074505806, -0.019999999552965164, 0.1599999964237213, 0.3100000023841858,\n" +
                "      -0.18000000715255737, -0.1599999964237213, -0.25999999046325684, -0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,\n" +
                "      0.05999999865889549, -0.27000001072883606, -0.27000001072883606, 0.4099999964237213, 0.23999999463558197,\n" +
                "      -0.09000000357627869, 0.009999999776482582, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.20999999344348907,\n" +
                "      -0.3499999940395355, -0.23999999463558197, 0.009999999776482582, -0.14000000059604645, -0.18000000715255737,\n" +
                "      -0.1599999964237213, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.25, -0.23000000417232513, 0.17000000178813934,\n" +
                "      -0.17000000178813934, 0.09000000357627869, 0.1599999964237213, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,\n" +
                "      -0.05000000074505806, -0.1899999976158142, 0.10999999940395355, -0.03999999910593033, -0.10999999940395355,\n" +
                "      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.009999999776482582, -0.009999999776482582, \n" +
                "      -0.23999999463558197, -0.33000001311302185, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, \n" +
                "      0.25999999046325684, -0.03999999910593033, 0.11999999731779099, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, \n" +
                "      0.0, 0.0, 0.0, -0.11999999731779099, -0.17000000178813934, 0.25999999046325684, 0.0, 0.0, 0.0, 0.0, 0.0, \n" +
                "      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.05000000074505806, -0.6100000143051147, -0.2199999988079071, 0.0, 0.0, \n" +
                "      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5600000023841858, 0.3100000023841858, 0.36000001430511475";
        System.out.println(a.split(",").length);
    }
}