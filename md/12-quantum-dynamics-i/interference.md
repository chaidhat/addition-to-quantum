[[superposition|superpositions]] of [[ket-state|states]] can interfere with each other.

For example, let a state $\ket{\psi}$ be
$$
\ket{\psi} = \alpha\ket{0} + \beta\ket{1}
$$

then let [[operator]] $H$ be

$$
H\ket{0} = \tfrac{1}{\sqrt2}\ket{0} + \tfrac{1}{\sqrt2}\ket{1} \qquad H\ket{1} = \tfrac{1}{\sqrt2}\ket{0} - \tfrac{1}{\sqrt2}\ket{1}
$$

so if there's a state like 
$$
HH\ket{0}
$$

$$
=\tfrac{1}{\sqrt2}\underbrace{\left(\tfrac{1}{\sqrt2}\ket{0}+\tfrac{1}{\sqrt2}\ket{1}\right)}_{H\ket{0}} + \tfrac{1}{\sqrt2}\underbrace{\left(\tfrac{1}{\sqrt2}\ket{0}-\tfrac{1}{\sqrt2}\ket{1}\right)}_{H\ket{1}}
$$
$$
=\left(\tfrac{1}{2}+\tfrac{1}{2}\right)\ket{0} + \left(\tfrac{1}{2}-\tfrac{1}{2}\right)\ket{1} = \ket{0}
$$

so the $\ket{1}$ destructively interfere and the $\ket{0}$ constructively interfere.