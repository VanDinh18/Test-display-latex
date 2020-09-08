/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import Latex from 'react-native-latex';
import MathJax from 'react-native-mathjax';
//import MathJax from 'react-native-mathjax-local';
//import MathJax from 'react-native-mathjax-svg';


const mmlOptions = {
  jax: ['input/MathML'],
};

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }}>
      {/* <MathJax
        style={{ height: 100 }}
        mathJaxOptions={{
          messageStyle: 'none',
          extensions: ['tex2jax.js'],
          jax: ['input/TeX', 'output/CommonHTML'],
          tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true,
          },
          TeX: {
            extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
          }
        }}

        html={'$$\lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$'}
      /> */}
      <MathJax
        style={{ height: 100 }}
        html={'$\\frac{x-2}{x+3}=\\frac{x-3}{2}$'}
      />
      <MathJax
        style={{ height: 100 }}
        html={'$\\sum_{i=1}^{n} x_{i}^{2}$'}
      />
      <MathJax
        style={{ height: 100 }}
        //html={' $$\lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$'}
        html={'$\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$'}
      />
      <MathJax
        style={{ height: 100 }}
        html={'$\\sqrt{ \\frac{x^2}{k+1}} \\qquad x^\\frac{2}{k+1} \\qquad \\frac{\\partial^2f}{\\partial x^2}$'}
      />
      <MathJax
        style={{ height: 100 }}
        //html={' $$\lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$'}
        html={'$\\int_{0}^{\\pi} \\sin x \\, dx = 2$'}
      />
    </View>
  )
}