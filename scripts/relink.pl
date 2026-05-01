#!/usr/bin/env perl
use strict;
use warnings;

my %map = (
  "T-invariant subspaces"  => "t-invariant-subspaces",
  "element"                => "element",
  "elements"               => "element",
  "function"               => "functions",
  "inner product"          => "inner-product",
  "LI"                     => "linear-independence",
  "linearly independent"   => "linear-independence",
  "magnitude"              => "magnitude",
  "matrix multiplication"  => "bra-ket-matrix-multiplication",
  "normal"                 => "normal",
  "operators"              => "operators",
  "orthogonal"             => "orthogonality",
  "orthonormal"            => "orthonormality",
  "projection"             => "projections",
  "set"                    => "set",
  "set theory"             => "set-theory",
  "sets"                   => "set",
  "square matrix"          => "square-matrix",
  "states"                 => "ket-states",
  "subset"                 => "subsets",
  "subsets"                => "subsets",
  "subspace"               => "subspaces",
  "subspaces"              => "subspaces",
  "variable"               => "variables-addition",
  "variables"              => "variables-addition",
  "vector"                 => "vectors",
  "vectors"                => "vectors",
);

local $/;
my $src = <>;
my $replaced = 0;
my $skipped  = 0;

$src =~ s!\\href\{https://www\.notion\.so[^\}]*\}\{([^\}]+)\}!
    my $full = $&;
    my $txt  = $1;
    (my $norm = $txt) =~ s/\s+/ /g;
    $norm =~ s/^\s+|\s+$//g;
    if (my $lab = $map{$norm}) {
      $replaced++;
      "\\hyperref[$lab]{$txt}";
    } else {
      $skipped++;
      warn "  skipped: '$norm'\n";
      $full;
    }
!ge;

print $src;
warn "replaced=$replaced skipped=$skipped\n";
