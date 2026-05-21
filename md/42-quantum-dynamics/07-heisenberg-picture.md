# Heisenberg Picture

Let observable $\hat{A}$. The Heisen picture operator is
$$\tilde{A}(t)=U^\dag (t)AU(t)$$

                                  Schrödinger Picture                                               Heisenberg Picture
  ------------ --------------------------------------------------------- -------------------------------------------------------------------------
  State                 $|\psi(t)\rangle = U(t)|\psi(0)\rangle$                                 $|\psi(0)\rangle$ constant
  Observable                         $A$ constant                                        $\tilde{A}(t) = U^\dagger(t)\, A\, U(t)$
  Dynamics      $i\hbar\dfrac{d|\psi\rangle}{dt} = H(t)|\psi(t)\rangle$   $\dfrac{d\tilde{A}}{dt} = \dfrac{i}{\hbar}[\tilde{H}(t), \tilde{A}(t)]$

For [<span class="underline">uniform dynamics</span>](#uniform-dynamics), $\tilde{H}(t)=\tilde{H}$. That means $U(t)\triangleq U(t,t_0)= e^{-iHt/\hbar}e^{iHt_0/\hbar}$

We know that something [<span class="underline">commutes</span>](#commutators) with itself, so $[U(t), H]=0$

$$\Rightarrow\tilde{H}(t)=U^\dag(t)HU(t)=H$$

Heisenberg equation of motion for $\tilde{A}(t)$

$$\frac{d}{dt}A(t)=\frac{d}{dt}(U^\dag AU + U^\dag A\frac{dU}{dt})$$
$$=-\frac{1}{i\hbar}U^\dag H A U+\frac{1}{i\hbar}U^\dag A H U$$
$$=-\frac{i}{\hbar}(U^\dag HU U^\dag A U - U^\dag A U U^\dag H U)$$
because [<span class="underline">commutator</span>](#commutators),
$$\boxed{\frac{d}{dt}\hat{A}(t)=\frac{i}{\hbar}[\hat{H}(t),\hat{A}(t)]}$$
